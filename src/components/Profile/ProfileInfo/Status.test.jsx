import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";

describe("StatusComponent", () => {
    test("status from props should be in the state", () => {
        const component = create(<Status status={'something'} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('something');
    });

    test("after creation div should be displayed", () => {
        const component = create(<Status status={'something'} />);
        const root = component.root;
        let div = root.findByType('div');
        expect(div.length).not.toBe(null);
    });
    
});
