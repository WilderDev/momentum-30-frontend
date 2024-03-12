'use client';

import { useState } from 'react';
import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import { Excercise } from '../../home/TodaysWorkoutHome';
import CurrentExercisePanel from './CurrentExercisePanel';
import UpcomingExercisesPanel from './UpcomingExercisesPanel';

// * Page: TodaysWorkoutPage
export default function TodaysWorkoutPage() {
  const todaysWorkout = [
    {
      regular: {
        name: 'Squats',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      easy: {
        name: 'Easy Squats',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      hard: {
        name: 'Hard Squats',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      reps: 10,
    },
    {
      regular: {
        name: 'Pushups',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      easy: {
        name: 'Easy Pushups',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      hard: {
        name: 'Hard Pushups',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      reps: 10,
    },
    {
      regular: {
        name: 'Jumping Jacks',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      easy: {
        name: 'Easy Jumping Jacks',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      hard: {
        name: 'Hard Jumping Jacks',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      reps: 10,
    },
    {
      regular: {
        name: 'Russian Twists',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      easy: {
        name: 'Easy Russian Twists',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      hard: {
        name: 'Hard Russian Twists',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      reps: 10,
    },
    {
      regular: {
        name: 'Squats',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      easy: {
        name: 'Easy Squats',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      hard: {
        name: 'Hard Squats',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      reps: 10,
    },
    {
      regular: {
        name: 'Pushups',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      easy: {
        name: 'Easy Pushups',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      hard: {
        name: 'Hard Pushups',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      reps: 10,
    },
    {
      regular: {
        name: 'Jumping Jacks',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      easy: {
        name: 'Easy Jumping Jacks',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      hard: {
        name: 'Hard Jumping Jacks',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      reps: 10,
    },
    {
      regular: {
        name: 'Russian Twists',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      easy: {
        name: 'Easy Russian Twists',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      hard: {
        name: 'Hard Russian Twists',
        videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
      },
      reps: 10,
    },
  ];

  const [isComplete, setIsComplete] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  const [currVariant, setCurrVariant] = useState<'regular' | 'easy' | 'hard'>(
    'regular',
  );

  // * Render
  return (
    <>
      <DashMainCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Current Exercise" />

          <CurrentExercisePanel
            currVariant={currVariant}
            currExercise={todaysWorkout[currIndex]}
            setVariant={(variant: 'easy' | 'regular' | 'hard') =>
              setCurrVariant(variant)
            }
            nextExercise={() => {
              const nextIndex = currIndex + 1;

              if (nextIndex < todaysWorkout.length) {
                setCurrIndex(nextIndex);
              } else {
                setIsComplete(true);
              }
            }}
          />
        </DashPanel>
      </DashMainCol>

      <DashSideCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Upcoming Exercises" />

          {/* <UpcomingExercisesPanel workout={todaysWorkout} /> */}
        </DashPanel>
      </DashSideCol>
    </>
  );
}
