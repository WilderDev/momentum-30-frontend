import Button from '@/components/ui/Button';

// * Page: DashboardHomePage
export default function TodaysWorkoutHome() {
  // * Render
  return (
    <>
      <Button
        loading={false}
        size="md"
        variant="primary"
        fill="solid"
        effect="none"
        shadow="md"
        rounded="md"
        url="/workouts/today"
        className="w-1/2"
      >
        Start Today&apos;s Workout
      </Button>
    </>
  );
}
