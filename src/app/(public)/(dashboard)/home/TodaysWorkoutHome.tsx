'use client';

import Button from '@/components/ui/Button';
import { getBEBaseUrl } from '@/lib/common/baseUrl';
import { useEffect, useState } from 'react';

// * Page: DashboardHomePage
export default function TodaysWorkoutHome() {
  const [todaysWorkout, setTodaysWorkout] = useState<any[]>([]);

  const getTodaysExercises = async () => {
    // * Fetch todays exercises
    try {
      const res = await fetch(getBEBaseUrl() + '/api/v1/workout/current');
      const data = await res.json();

      console.log('data.data.workoutList:', data.data.workoutList);

      setTodaysWorkout(data.data.workoutList);
    } catch (err) {
      console.error(err);
    }
  };

  // * Fetch todays exercises
  useEffect(() => {
    getTodaysExercises();
  }, []);

  // Initialize a Set to keep track of unique exercise names
  const uniqueNames = new Set();

  const todaysExerciseSet = todaysWorkout
    .map((exercise) => {
      return {
        regular: {
          name: exercise.exercise.regularVariation.name,
          videoURL: exercise.exercise.regularVariation.videoURL,
        },
        easy: {
          name: exercise.exercise.easyVariation.name,
          videoURL: exercise.exercise.easyVariation.videoURL,
        },
        hard: {
          name: exercise.exercise.hardVariation.name,
          videoURL: exercise.exercise.hardVariation.videoURL,
        },
      };
    })
    // Filter the array to only include the first occurrence of each exercise name
    .filter((exerciseSet) => {
      if (uniqueNames.has(exerciseSet.regular.name)) {
        return false; // If the name is already in the Set, exclude this item
      } else {
        uniqueNames.add(exerciseSet.regular.name); // Add the new name to the Set
        return true; // Include this item in the filtered array
      }
    });

  // * Render
  return (
    <div className="flex flex-col space-y-4">
      {/* Today's Workout */}
      <div className="flex flex-col space-y-4">
        <p className="text-center">
          Here are the exercises you need to do today. Click on the exercise to
          see the video.
        </p>
      </div>

      {todaysWorkout.length > 0 && (
        <div className="flex gap-12 flex-wrap justify-between mt-4">
          {todaysExerciseSet.map((exercise, i) => (
            <div
              key={i}
              className="flex flex-col space-y-4 shadow-sm p-4 rounded-md bg-white w-full md:w-[47%] border border-slate-200"
            >
              {/* Regular */}
              <Button
                loading={false}
                size="md"
                variant="primary"
                shadow="none"
                rounded="md"
                url={exercise.regular.videoURL}
              >
                {exercise.regular.name}
              </Button>

              <Button
                loading={false}
                size="sm"
                variant="primary"
                fill="outline"
                shadow="none"
                rounded="md"
                url={exercise.easy.videoURL}
              >
                Easy: {exercise.easy.name}
              </Button>

              <Button
                loading={false}
                size="sm"
                variant="primary"
                fill="outline"
                shadow="none"
                rounded="md"
                url={exercise.hard.videoURL}
              >
                Hard: {exercise.hard.name}
              </Button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between gap-x-12 ">
        {/* Yesterday Button */}
        {/* <Button
          loading={false}
          size="sm"
          variant="dark"
          fill="outline"
          effect="none"
          shadow="md"
          rounded="md"
          url="/workouts/today"
          className="w-full md:w-64 mt-8 text-center"
        >
          Do Yesterday&apos;s Workout
        </Button> */}

        <Button
          loading={false}
          size="md"
          variant="secondary"
          fill="solid"
          effect="none"
          shadow="md"
          rounded="md"
          url="/workouts/today"
          className="w-full md:w-[47%] mt-8 ml-auto text-center"
        >
          Start Today&apos;s Workout
        </Button>
      </div>
    </div>
  );
}
