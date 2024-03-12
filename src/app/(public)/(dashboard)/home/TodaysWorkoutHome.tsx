import Button from '@/components/ui/Button';

export interface Excercise {
  name: string;
  videoURL: string;
  easy: {
    name: string;
    videoURL: string;
  };
  hard: {
    name: string;
    videoURL: string;
  };
  reps: number;
}

// * Page: DashboardHomePage
export default function TodaysWorkoutHome() {
  const todaysWorkout: Excercise[] = [
    {
      name: 'Squats',
      videoURL:
        'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      easy: {
        name: 'Easy Squats',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      hard: {
        name: 'Hard Squats',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      reps: 10,
    },
    {
      name: 'Pushups',
      videoURL:
        'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      easy: {
        name: 'Easy Pushups',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      hard: {
        name: 'Hard Pushups',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      reps: 10,
    },
    {
      name: 'Jumping Jacks',
      videoURL:
        'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      easy: {
        name: 'Easy Jumping Jacks',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      hard: {
        name: 'Hard Jumping Jacks',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      reps: 10,
    },
    {
      name: 'Russian Twists',
      videoURL:
        'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      easy: {
        name: 'Easy Russian Twists',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      hard: {
        name: 'Hard Russian Twists',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      reps: 10,
    },
    {
      name: 'Squats',
      videoURL:
        'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      easy: {
        name: 'Easy Squats',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      hard: {
        name: 'Hard Squats',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      reps: 10,
    },
    {
      name: 'Pushups',
      videoURL:
        'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      easy: {
        name: 'Easy Pushups',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      hard: {
        name: 'Hard Pushups',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      reps: 10,
    },
    {
      name: 'Jumping Jacks',
      videoURL:
        'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      easy: {
        name: 'Easy Jumping Jacks',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      hard: {
        name: 'Hard Jumping Jacks',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      reps: 10,
    },
    {
      name: 'Russian Twists',
      videoURL:
        'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      easy: {
        name: 'Easy Russian Twists',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      hard: {
        name: 'Hard Russian Twists',
        videoURL:
          'https://www.youtube.com/watch?v=aq2xZxfrQlM&list=PLeVb1RGNTvdeF_q2-cean9aFIvhbtV9hb&index=6&pp=iAQB',
      },
      reps: 10,
    },
  ];

  // Initialize a Set to keep track of unique exercise names
  const uniqueNames = new Set();

  const todaysExerciseSet = todaysWorkout
    .map((exercise) => {
      return {
        name: exercise.name,
        videoURL: exercise.videoURL,
        easy: {
          name: exercise.easy.name,
          videoURL: exercise.easy.videoURL,
        },
        hard: {
          name: exercise.hard.name,
          videoURL: exercise.hard.videoURL,
        },
      };
    })
    // Filter the array to only include the first occurrence of each exercise name
    .filter((exerciseSet) => {
      if (uniqueNames.has(exerciseSet.name)) {
        return false; // If the name is already in the Set, exclude this item
      } else {
        uniqueNames.add(exerciseSet.name); // Add the new name to the Set
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

      {/* Today's Exercises */}
      <div className="flex gap-12 flex-wrap justify-between mt-4">
        {todaysExerciseSet.map((exercise) => (
          <div
            key={exercise.name}
            className="flex flex-col space-y-4 shadow-sm p-4 rounded-md bg-white w-full md:w-[47%] border border-slate-200"
          >
            {/* Regular */}
            <Button
              key={exercise.name}
              loading={false}
              size="md"
              variant="primary"
              shadow="none"
              rounded="md"
              url={exercise.videoURL}
            >
              {exercise.name}
            </Button>

            <Button
              key={exercise.easy.name}
              loading={false}
              size="sm"
              variant="primary"
              fill="outline"
              shadow="none"
              rounded="md"
              url={exercise.easy.videoURL}
            >
              Easy: {exercise.name}
            </Button>

            <Button
              key={exercise.easy.name}
              loading={false}
              size="sm"
              variant="primary"
              fill="outline"
              shadow="none"
              rounded="md"
              url={exercise.easy.videoURL}
            >
              Hard: {exercise.name}
            </Button>
          </div>
        ))}
      </div>

      <div className="flex justify-between gap-x-12 ">
        {/* Yesterday Button */}
        <Button
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
        </Button>

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
