// /** @jsxImportSource @emotion/react */
import { Chip, FormControl, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { css } from "@emotion/react";

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

const TagInput: React.FC<ITagInterface> = (
  props: ITagInterface
): JSX.Element => {
  const {
    tags,
    setTags,
    initialValue = "",
    onBlur,
    onFocus,
    innerRef = null,
    inputProps = {},
    chipProps = {},
    allowBackspace = false,
    allowDuplicate = false,
  } = props;
  const [userTags, setUserTags] = useState(tags as string[]);
  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(() => {
    setUserTags(tags);
  }, [tags]);

  const handleDelete = (index: number) => {
    const newArray = [...userTags];
    newArray.splice(index, 1);

    setUserTags(newArray);
    setTags(newArray);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleKeyDown = (e: any) => {
    const { value } = e.target;

    // If the enter key is clicked on
    if (e.key === "Enter" && value) {
      const duplicate = userTags.indexOf(value.trim());

      if (!allowDuplicate && duplicate !== -1) {
        setInputValue("");
        return;
      }

      if (!value.replace(/\s/g, "").length) return;

      e.persist();
      const newList = [...userTags];
      newList.push(value.trim());
      setUserTags(newList);
      setTags(newList);
      setInputValue("");
    }

    // If the backspace key is clicked on
    if (
      !allowBackspace &&
      userTags.length &&
      !value.length &&
      e.key === "Backspace"
    ) {
      let index = userTags.length - 1;
      handleDelete(index);
    }
  };

  return (
    <div>
      <FormControl
        style={{
          gap: "10px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          border: "2px solid lightgray",
          padding: "4px",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            gap: "6px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {userTags.map((item, index: number) => (
            <Chip
              key={index}
              size="small"
              onDelete={() => handleDelete(index)}
              label={item}
              {...chipProps}
            />
          ))}
        </div>
        <Input
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={onBlur}
          onFocus={onFocus}
          inputRef={innerRef}
          {...inputProps}
        />
      </FormControl>
    </div>
  );
};

export default TagInput;
