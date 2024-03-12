'use client';

import { useState } from 'react';
import { Excercise } from '../../home/TodaysWorkoutHome';
import Button from '@/components/ui/Button';

interface IProps {
  currVariant: 'easy' | 'regular' | 'hard';
  currExercise: {
    reps: number;
    easy: {
      name: string;
      videoURL: string;
    };
    regular: {
      name: string;
      videoURL: string;
    };
    hard: {
      name: string;
      videoURL: string;
    };
  };
  nextExercise: () => void;
  setVariant: (variant: 'easy' | 'regular' | 'hard') => void;
}

// * Page: TodaysWorkoutPage
export default function CurrentExercisePanel({
  currVariant,
  currExercise,
  nextExercise,
  setVariant,
}: IProps) {
  console.log('currExercise:', currExercise);

  //   const [currentExerciseName, setCurrentExerciseName] = useState(
  //     currExercise.name,
  //   );
  //   const [currentExerciseVideoURL, setCurrentExerciseVideoURL] = useState(
  //     currExercise.videoURL,
  //   );
  //   const [currentExerciseVariant, setCurrentExerciseVariant] =
  //     useState('normal');

  // * Render
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Current Exercise Variant */}
        <div className="w-2/3">
          {/* Name */}
          <h1 className="text-3xl font-bold underline">
            {currExercise[currVariant].name}
          </h1>

          {/* Reps */}
          <h2 className="text-xl font-bold mt-2">
            Reps:
            <span className="text-green-500 inline-block ml-2">
              {currExercise.reps}
            </span>
          </h2>

          {/* Video */}
          <iframe
            width="560"
            height="315"
            src={currExercise[currVariant].videoURL}
            title={currExercise[currVariant].name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="mt-4"
          ></iframe>
        </div>

        {/* Exercise Variants */}
        <div className="mt-4 w-[30%]">
          <h2 className="text-2xl font-bold">Variants</h2>

          {/* Easy Variant */}
          {currVariant !== 'easy' && (
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-xl font-bold">Easy</h3>
              <Button onClick={() => setVariant('easy')}>View</Button>
            </div>
          )}

          {/* Normal Variant */}
          {currVariant !== 'regular' && (
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-xl font-bold">Normal</h3>
              <Button onClick={() => setVariant('regular')}>View</Button>
            </div>
          )}

          {/* Hard Variant */}
          {currVariant !== 'hard' && (
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-xl font-bold">Hard</h3>
              <Button onClick={() => setVariant('hard')}>View</Button>
            </div>
          )}
        </div>
      </div>

      {/* Next Exercise */}
      <Button
        variant="secondary"
        className="mt-6"
        onClick={() => {
          setVariant('regular');
          nextExercise();
        }}
      >
        Next Exercise
      </Button>
    </div>
  );
}
