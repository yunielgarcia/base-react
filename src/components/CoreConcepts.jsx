import {CORE_CONCEPTS} from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

const CoreConcepts = () => {
    const sectionContent = <>
        <section id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept key={conceptItem.title} {...conceptItem} />
                ))}
            </ul>
        </section>
    </>

    return (
        <Section title={"Core Concepts"}>{sectionContent}</Section>
    );
}
export default CoreConcepts;