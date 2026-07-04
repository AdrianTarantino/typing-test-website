export default function Layout(props: LayoutProps<'/dashboard'>) {
    return (
        <section>
            {props.children}
        </section>
    )
}