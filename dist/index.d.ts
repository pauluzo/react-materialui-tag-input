import React from "react";
export interface IInputInterface {
    value: string | number;
    inputRef?: React.Ref<any>;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}
export interface IChipInterface {
    size: string;
    key?: React.Key | null;
    onDelete: (event: any) => void;
    label: React.ReactNode;
}
interface ITagInterface {
    tags: string[];
    setTags: (items: string[]) => void;
    initialValue?: string;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    innerRef?: React.Ref<any> | undefined;
    inputProps?: Record<string, any>;
    chipProps?: Record<string, any>;
    allowBackspace?: Boolean;
    allowDuplicate?: Boolean;
}
declare const TagInput: React.FC<ITagInterface>;
export default TagInput;
