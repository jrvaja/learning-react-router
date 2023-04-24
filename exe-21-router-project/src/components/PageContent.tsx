import { FC, ReactNode } from "react";
import classes from "./PageContent.module.css";

type PageContentProps = {
  title: string;
  children?: ReactNode;
};
const PageContent: FC<PageContentProps> = ({ title, children }) => {
  return (
    <>
      <div className={classes.center}>
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
};

export default PageContent;
