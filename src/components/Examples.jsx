import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from '../data.js';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selected) {
        setSelectedTopic(selected);
    }

    let tabContent = <p>Please select a topic</p>;

    if (selectedTopic) {
        tabContent = <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    }

    return (
        <Section title={'Examples'} id='examples'>
            <Tabs
                ButtonsContainer="menu"
                buttons={<>
                    <TabButton isSelected={selectedTopic === 'components'}
                        onSelect={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'}
                        onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'}
                        onSelect={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'}
                        onSelect={() => handleSelect('state')}>States</TabButton>
                </>}>
                {tabContent}
            </Tabs>
        </Section>
    )
}
