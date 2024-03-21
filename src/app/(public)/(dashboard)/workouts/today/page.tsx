'use client';

import { useEffect, useState } from 'react';
import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import CurrentExercisePanel from './CurrentExercisePanel';
import UpcomingExercisesPanel from './UpcomingExercisesPanel';
import { getBEBaseUrl } from '@/lib/common/baseUrl';

// * Page: TodaysWorkoutPage
export default function TodaysWorkoutPage() {
  // * State
  const [isComplete, setIsComplete] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  const [currVariant, setCurrVariant] = useState<
    'easyVariation' | 'regularVariation' | 'hardVariation'
  >('regularVariation');

  const [todaysWorkout, setTodaysWorkout] = useState<any[]>([]);

  const getTodaysExercises = async () => {
    // * Fetch todays exercises
    try {
      const res = await fetch(getBEBaseUrl() + '/api/v1/workout/current');
      const data = await res.json();

      setTodaysWorkout(data.data.workoutList);
    } catch (err) {
      console.error(err);
    }
  };

  // * Fetch todays exercises
  useEffect(() => {
    getTodaysExercises();
  }, []);

  // * Render
  return (
    <>
      <DashMainCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Current Exercise" />

          {!isComplete && todaysWorkout.length > 0 && (
            <CurrentExercisePanel
              currVariant={currVariant}
              currExercise={todaysWorkout[currIndex]}
              setVariant={(
                variant: 'easyVariation' | 'regularVariation' | 'hardVariation',
              ) => setCurrVariant(variant)}
              nextExercise={() => {
                const nextIndex = currIndex + 1;

                if (nextIndex < todaysWorkout.length) {
                  setCurrIndex(nextIndex);
                } else {
                  setIsComplete(true);
                }
              }}
            />
          )}
        </DashPanel>
      </DashMainCol>

      <DashSideCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Upcoming Exercises" />

          <UpcomingExercisesPanel
            currExerciseNum={currIndex}
            workout={todaysWorkout}
            currVariant={currVariant}
          />
        </DashPanel>
      </DashSideCol>
    </>
  );
}
