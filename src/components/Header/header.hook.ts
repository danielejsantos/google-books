import { useState } from "react";

function useHeader() {
  const [status, setStatus] = useState('default');

  function nextStatus() {
    switch (status) {
      case 'default':
        setStatus('search');
        break;
      case 'search':
        setStatus('back');
        break;
      case 'back':
        setStatus('default');
        break;
      default:
        break;
    }
  }

  return { status, nextStatus }
}

export default useHeader;