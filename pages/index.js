import Application from 'react-rainbow-components/components/Application';
import Button from 'react-rainbow-components/components/Button';
import Lookup from 'react-rainbow-components/components/Lookup';
import ProgressIndicator from "react-rainbow-components/components/ProgressIndicator";
import ProgressStep from "react-rainbow-components/components/ProgressStep";

const Home = () => (
  <Application>
    <ProgressIndicator currentStepName="step-3">
      <ProgressStep name="step-1" />
      <ProgressStep name="step-2" />
      <ProgressStep name="step-3" />
      <ProgressStep name="step-4" />
      <ProgressStep name="step-5" />
    </ProgressIndicator>
    <br/>
    <Button label="button" />
    <br/>
    <Lookup label="lookup label" placeholder="Search..." />
  </Application>
);

export default Home;
