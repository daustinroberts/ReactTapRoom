function MyStyledComponent(props) {
  var myStyledComponentStyles = {`
    backgroundColor: '#ecf0f1';
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  `}
  return (
    <div>
      <p className="red-text">only this paragraph will get the style</p>
      <style jsx>{`
          .red-text {
            color: red;
          }
    `}</style>

    </div>
  );
}

export default MyStyledComponent;
