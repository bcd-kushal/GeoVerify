export type CommentBubbleType = {
} & ({
    textareaDisabled: true, commentString: string
} | {
    textareaDisabled: false, textareaValue: string, placeholder: string
    handleInputChange: (str: string) => void
})