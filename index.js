const Notification = (props) => {
  //  Write your code here.
  const { image, className, notificationText } = props;

  return (
    <div className={`div ${className}`}>
      {image}
      {notificationText}
    </div>
  );
};
const image = (
  <img
    src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    className="logo"
  />
);
const image1 = (
  <img
    src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    className="logo"
  />
);
const image2 = (
  <img
    src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    className="logo"
  />
);
const image3 = (
  <img
    src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    className="logo"
  />
);
const para = <p>Information Message</p>;

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="container">
      <h1 className="heading">Notifications</h1>
      <Notification
        image={image}
        notificationText={para}
        className="boxContainer"
      />
      <Notification
        image={image1}
        notificationText="Success Message"
        className="boxContainer1"
      />
      <Notification
        image={image2}
        notificationText="Warning Message"
        className="boxContainer2"
      />
      <Notification
        image={image3}
        notificationText="Error Message"
        className="boxContainer3"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
