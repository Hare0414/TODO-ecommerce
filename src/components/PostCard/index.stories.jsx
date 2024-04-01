import PostCard from "./index"
export default {
    title: "PostCard",
    component: PostCard,
    parameters: {actions: {argTypesRegex: "^on.*"}},
    decorators: [
        (Story) => (
            <div className="py-4 bg-slate-600">
                <Story />

            </div>
        )
    ]
    
}