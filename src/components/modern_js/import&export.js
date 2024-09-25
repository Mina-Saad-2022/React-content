const import_export = () => {
  return (
    <div>
      <p>
        When exporting: I need to type{" "}
        <span className="text-danger">'default'</span> at the end of the page
        that has the function I want to use elsewhere
        <br /> When importing: you must type 'import' for the function name and
        path, then in the place where I want to use it, you must be between{" "}
        <span className="text-danger">{"name function ()"} </span>
      </p>
    </div>
  );
};

export default import_export;
