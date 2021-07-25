const action=(type,payload=false) => {
    return {
      type:type,
      payload:payload,
    }
  }

export default action