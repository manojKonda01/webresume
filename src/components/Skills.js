function ProgressBar(props) {
  const style = {width:props.value+"%"} ;
  return (
    <>
      <p className="pt-4 mb-0 " style={{fontWeight:"900"}}>{props.name} {props.component ? props.component : ''}</p>
      <div className="progress">
        <div
          className="progress-bar progress-bar-animated "
          role="progressbar"
          aria-valuenow={props.value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{width:style.width, "--bs-progress-bar-bg":props.color}}
        ></div>
        <p className="text-black px-2 fw-bold">{props.value+"%"}</p>
      </div>
    </>
  );
}
export default ProgressBar;
