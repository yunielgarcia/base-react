export default function Section({title, children, ...props}) {
    // todo: making use of forwarded props i.e (id , className, etc)
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );

}