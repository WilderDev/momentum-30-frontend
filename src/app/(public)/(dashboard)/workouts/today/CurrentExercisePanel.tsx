'use client';

import Button from '@/components/ui/Button';

interface IProps {
  currVariant: 'easyVariation' | 'regularVariation' | 'hardVariation';
  // currExercise: {
  //   reps: number;
  //   easyVariation: {
  //     name: string;
  //     videoURL: string;
  //   };
  //   regularVariation: {
  //     name: string;
  //     videoURL: string;
  //   };
  //   hardVariation: {
  //     name: string;
  //     videoURL: string;
  //   };
  // };
  currExercise: any;
  nextExercise: () => void;
  setVariant: (
    variant: 'easyVariation' | 'regularVariation' | 'hardVariation',
  ) => void;
}

// * Page: TodaysWorkoutPage
export default function CurrentExercisePanel({
  currVariant,
  currExercise,
  nextExercise,
  setVariant,
}: IProps) {
  // * Render
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Current Exercise Variant */}
        <div className="w-2/3">
          {/* Name */}
          <h1 className="text-3xl font-bold underline">
            {currExercise.exercise[currVariant].name}
          </h1>

          {/* Reps */}
          <h2 className="text-xl font-bold mt-2">
            Reps:
            <span className="text-green-500 inline-block ml-2">
              {currExercise.rep}
            </span>
          </h2>

          {/* Video */}
          <iframe
            width="560"
            height="315"
            src={currExercise.exercise[currVariant].videoURL}
            title={currExercise.exercise[currVariant].name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="mt-4"
          ></iframe>
        </div>

        {/* Exercise Variants */}
        <div className="mt-4 w-[30%]">
          <h2 className="text-2xl font-bold">Variants</h2>

          {/* Easy Variant */}
          {currVariant !== 'easyVariation' && (
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-xl font-bold">Easy</h3>
              <Button onClick={() => setVariant('easyVariation')}>View</Button>
            </div>
          )}

          {/* Normal Variant */}
          {currVariant !== 'regularVariation' && (
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-xl font-bold">Normal</h3>
              <Button onClick={() => setVariant('regularVariation')}>
                View
              </Button>
            </div>
          )}

          {/* Hard Variant */}
          {currVariant !== 'hardVariation' && (
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-xl font-bold">Hard</h3>
              <Button onClick={() => setVariant('hardVariation')}>View</Button>
            </div>
          )}
        </div>
      </div>

      {/* Next Exercise */}
      <Button
        variant="secondary"
        className="mt-6"
        onClick={() => {
          nextExercise();
        }}
      >
        Next Exercise
      </Button>
    </div>
  );
}
