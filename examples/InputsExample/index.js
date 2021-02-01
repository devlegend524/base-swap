import {
    Input,
    DatePicker,
    DateTimePicker,
    FileSelector,
    Lookup,
    GoogleAddressLookup,
    PhoneInput,
    Picklist,
    Option,
} from 'react-rainbow-components';

const styles = {};
export default function InputsExample() {
    return (
        <div className="rainbow-flex rainbow-flex_wrap rainbow-p-vertical_large">
            <div className="rainbow-p-around_medium rainbow-align_start">
                <Input label="Enter your email" placeholder="user@domain.com" />
            </div>
            <div className="rainbow-p-around_medium rainbow-align_start">
                <Lookup label="lookup label" placeholder="Search..." />
            </div>
            <div className="rainbow-p-around_medium rainbow-align_start">
                <FileSelector
                    label="File selector multiple"
                    placeholder="Drag & Drop or Click to Browse"
                />
            </div>
            <div className="rainbow-p-around_medium rainbow-align_start">
                <DatePicker label="Select date" />
            </div>
            <div className="rainbow-p-around_medium rainbow-align_start">
                <DateTimePicker label="Select date and time" />
            </div>
            <div className="rainbow-p-around_medium rainbow-align_start">
                <GoogleAddressLookup label="Select address" />
            </div>
            <div className="rainbow-p-around_medium rainbow-align_start">
                <Picklist label="Select Building" placeholder="Choose Building" enableSearch>
                    <Option name="option 1" label="All Buildings" />
                    <Option name="option 2" label="New Building" />
                    <Option name="header" label="Your Buildings" />
                    <Option name="option 3" label="Experimental" />
                    <Option name="option 4" label="Bennet Towers" />
                    <Option name="option 5" label="Empire State" />
                    <Option name="option 6" label="Central Park" />
                    <Option name="option 7" label="Chrysler" />
                    <Option name="option 8" label="Plaza" />
                </Picklist>
            </div>
            <div className="rainbow-p-around_medium rainbow-align_start">
                <PhoneInput
                    label="Phone Number"
                    placeholder="Enter your phone number"
                />
            </div>
        </div>
    );
}
