const checkType = (val: number | string | null) => {
    if (typeof val === "number") {
      return true;
    } else {
      return false;
    }
  };


  export default checkType