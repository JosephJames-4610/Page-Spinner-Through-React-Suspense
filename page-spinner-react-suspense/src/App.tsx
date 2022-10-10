import * as React from 'react';
import PageSpinner from './components/PageSpinner';
import ReturnPromise from './components/ReturnPromise';
import RandomImageList from './components/RandomImageList';

function App() {
  const [preRenderLoading, setPreRenderLoading] = React.useState<boolean>(true);
  const [initialLoad, setInitialLoad] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      setTimeout(() => { setPreRenderLoading(false); }, 5000);
    }
  }, []);

  return (
    <React.Suspense fallback={<PageSpinner/>}>
      <RandomImageList/>
      <ReturnPromise preRenderLoading={preRenderLoading}/>
    </React.Suspense>
  );
}

export default App;
