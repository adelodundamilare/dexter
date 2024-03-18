import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface IEditComponent {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
  title?: string;
}
const AppDialog = ({ isOpen, children, title, close }: IEditComponent) => {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        {title && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
        )}
        <div className="p-5">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;
