export function Button({ tag, classes, contenido }) {
  return (
    <>
      {tag === 'button' ? (
        <button className={classes}>{contenido}</button>
      ) : (
        <i className={classes}>{contenido}</i>
      )}
    </>
  );
}
