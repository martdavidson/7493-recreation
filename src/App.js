import {gql, useSubscription} from "@apollo/client";
import {useEffect, useState} from "react";


export const SOME_SUBSCRIPTION = gql`
    subscription SomeSubscription($id: String!) {
      someSubscription(id: $id){
        id
      }
    }
`;

const App = () => {
  const [renderTimestamp, setRenderTimestamp] = useState(Date.now());

  useSubscription(SOME_SUBSCRIPTION, {
    variables: {id: 'someId'},
    onSubscriptionData(data) {
      console.log(renderTimestamp);
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderTimestamp(Date.now());
    }, 3000);

    return () => clearTimeout(timer);
  },[renderTimestamp]);

  return (
    <div className="App" />
  );
};

export default App;
