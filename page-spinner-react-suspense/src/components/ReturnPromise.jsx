// interface ReturnPromiseProps {
//   preRenderLoading: boolean;
// }

// export default function ReturnPromise({ preRenderLoading }: ReturnPromiseProps) {
export default function ReturnPromise({ preRenderLoading }) {
  const loadingPromise = new Promise((resolve) => { resolve('preRenderLoading') });
  const returnPromise = () => { throw loadingPromise };
  return preRenderLoading && returnPromise();
}