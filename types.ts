import { ReactNode } from "react";
import { IconBaseProps } from "react-icons";



export interface Food{
  id: number,
  name: string,
  description: string,
  price: number,
  available: boolean,
  image: string

}


export type FoodPropieties = {
  id: number,
  name: string,
  description: string,
  price: number,
  available: boolean,
  image: string
}
export interface ModalProp{
  openModal: () => void;
  }
export interface FoodProps{
  food: FoodPropieties;
  handleEditFood: (food: FoodPropieties) => void
  handleDelete: (id: number) => void;

}

export interface ModalEditProps{
  setIsOpen: () => void;
  handleUpdateFood: (data: DataFormRocketSeatProps) => void;
  isOpen: boolean;
  editingFood: FoodPropieties;
}

export interface ModalProps{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
}


export interface InputProps{
  name: string;
  placeholder?: string;
  icon?: React.ComponentType<IconBaseProps>;
}


export interface DataFormRocketSeatProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

export interface ModalAddFoodProps {

  handleAddFood: (data:DataFormRocketSeatProps) => void;
  setIsOpen: () => void;
  isOpen: boolean;
  }