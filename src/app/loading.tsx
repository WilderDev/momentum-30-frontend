import LoadingShapes from './components/ux/LoadingShapes';

// * Component: RootLoading
export default function RootLoading() {
  // * Render
  return (
    <div className="fixed inset-0 h-screen w-screen bg-slate-100/50 backdrop-blur-sm z-50 !m-0">
      <LoadingShapes />
    </div>
  );
}
