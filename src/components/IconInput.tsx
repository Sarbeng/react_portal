interface Props {
    name?: string;
    type?: string;
    label?: string;
    value?: string;
    ref?: string;
    handleChange: (
      e?:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    handleBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  }

export function IconInput (props: Props){
    return (
        <div></div>
    );
}