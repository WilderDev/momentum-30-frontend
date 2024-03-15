'use client';

// * Page: UpcomingExercisesPanel
export default function UpcomingExercisesPanel({
  workout,
  currExerciseNum,
  currVariant,
}: any) {
  // * Render
  return (
    <div className="flex flex-col space-y-6">
      {workout
        .slice(currExerciseNum + 1)
        .map((exercise: any, index: number) => (
          <div className="shadow-md p-4 hocus:shadow-lg rounded-md" key={index}>
            <h2>
              {exercise.exercise[currVariant].name} ({exercise.rep})
            </h2>
          </div>
        ))}
    </div>
  );
}
