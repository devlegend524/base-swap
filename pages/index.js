import { ExampleSection } from '../components';
import {
    CarouselCardExample,
    DrawerExample,
    InputsExample,
    VerticalNavigationExample,
} from '../examples';

const Home = () => {
    return (
        <div className="rainbow-p-horizontal_xx-large">
            <ExampleSection title="CarouselCard example" component={<CarouselCardExample />} />
            <ExampleSection title="Drawer example" component={<DrawerExample />} />
            <ExampleSection title="Forms example" component={<InputsExample />} />
            <ExampleSection
                title="VerticalNavigation example"
                component={<VerticalNavigationExample />}
            />
        </div>
    );
};

export default Home;
