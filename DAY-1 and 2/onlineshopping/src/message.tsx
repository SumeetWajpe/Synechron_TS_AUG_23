import React from "react";

type MessageProps = {
  msg: string;
};
// let Message: React.FC<MessageProps> = (props: MessageProps) => {
//   return <h1>{props.msg}</h1>;
// };

// export default Message;

class Message extends React.Component<MessageProps> {
  render(): React.ReactNode {
    return <h1>{this.props.msg}</h1>;
  }
}
export default Message;
