'use client';

import { useState } from 'react';
import { Excercise } from '../../home/TodaysWorkoutHome';
import Button from '@/components/ui/Button';

// * Page: UpcomingExercisesPanel
export default function UpcomingExercisesPanel() {
  const todaysWorkout: Excercise[] = [
    {
      name: 'Squats',
      videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
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
      name: 'Pushups',
      videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
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
      name: 'Jumping Jacks',
      videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
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
      name: 'Russian Twists',
      videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
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
      name: 'Squats',
      videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
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
      name: 'Pushups',
      videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
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
      name: 'Jumping Jacks',
      videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
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
      name: 'Russian Twists',
      videoURL: 'https://www.youtube.com/embed/aq2xZxfrQlM',
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

  // * Render
  return (
    <div className="flex flex-col space-y-6">
      {todaysWorkout.map((exercise, index) => (
        <div className="shadow-md p-4 hocus:shadow-lg rounded-md" key={index}>
          <h2>
            {index + 1}: {exercise.name} ({exercise.reps})
          </h2>
        </div>
      ))}
    </div>
  );
}
