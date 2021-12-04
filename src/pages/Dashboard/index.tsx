import { Component, useEffect, useState } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';



interface Food{
  id: number,
  name: string,
  description: string,
  price: number,
  available: boolean,
  image: string

}

function Dashboard(){

const [ foodList , setFoodList] = useState<Food[]>([])
const [modalOpen, setModalOpen] = useState(false)
const [editModalOpen, setEditModalOpen] = useState(false)
const [ editingFood , setEditingFood ] = useState<Food>({} as Food)

// class Dashboard extends Component {
//  constructor(props) {
//  super(props);
//  this.state = {
//  foods: [],
//   editingFood: {},
//    modalOpen: false,
//  editModalOpen: false,
// }
// }


useEffect(()=>{
   const fetchFoods  = async () => {
    const response = await api.get('/foods');
    setFoodList(response.data)
  }
  fetchFoods()
},[])
  /* // async componentDidMount() {
  //   const response = await api.get('/foods');

  //   this.setState({ foods: response.data });
  // } */

  const handleAddFood = async (food: Food) => {
    try {
      const response = await api.post('/foods', {
        ...food,
        available: true,
      });

      setFoodList((prev) => [...prev, response.data]);
      //setFoodList([...foodList, response.data]);
      //setFoodList([...foodList, response.data]);
    }catch (err) {
      console.log(err);
    }

  }

/*   handleAddFood = async food => {
    const { foods } = this.state;

    try {
      const response = await api.post('/foods', {
        ...food,
        available: true,
      });

      this.setState({ foods: [...foods, response.data] });
    } catch (err) {
      console.log(err);
    }
  } */

    const handleUpdateFood = async (food : Food)=> {
      try {
        const response = await api.put(
          `/foods/${editingFood.id}`,
          { ...editingFood, ...food },
        );
  
        const foodsUpdated = foodList.map(f =>
          f.id !== response.data.id ? f : response.data,
        );
  
        setFoodList(foodsUpdated);
      } catch (err) {
        console.log(err);
      }
    }

  /* 
  handleUpdateFood = async food => {
    const { foods, editingFood } = this.state;

    try {
      const foodUpdated = await api.put(
        `/foods/${editingFood.id}`,
        { ...editingFood, ...food },
      );

      const foodsUpdated = foods.map(f =>
        f.id !== foodUpdated.data.id ? f : foodUpdated.data,
      );

      this.setState({ foods: foodsUpdated });
    } catch (err) {
      console.log(err);
    }
  } */

  const handleDeleteFood = async (id: number) => {
    await api.delete(`/foods/${id}`);
    const foodsFiltered = foodList.filter(food => food.id !== id);
    setFoodList(foodsFiltered);
  }
/*   handleDeleteFood = async id => {
    const { foodslist } = this.state;

    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods.filter(food => food.id !== id);

    this.setState({ foods: foodsFiltered });
  } */

  const toggleModal = () => {
    setModalOpen (!modalOpen)
  }


  /* toggleModal = () => {
    const { modalOpen } = this.state;

    this.setState({ modalOpen: !modalOpen });
  } */

  const toggleEditModal = () => {

    setEditModalOpen(  !editModalOpen  );

  }

 /*  toggleEditModal = () => {
    const { editModalOpen } = this.state;

    this.setState({ editModalOpen: !editModalOpen });
  } */

const handleEditFood = (food: Food) => {

  setEditingFood(food)
  setModalOpen(true)

}
  /* handleEditFood = food => {
    this.setState({ editingFood: food, editModalOpen: true });
  } */

    return (
      <>
        <Header openModal = { toggleModal } />
        <ModalAddFood
          isOpen={modalOpen}
          setIsOpen={toggleModal}
          handleAddFood={()=> handleAddFood}
        />
        <ModalEditFood
          isOpen={editModalOpen}
          setIsOpen={toggleEditModal}
          editingFood={editingFood}
          handleUpdateFood={handleUpdateFood}
        />

        <FoodsContainer data-testid="foods-list">
          {foodList &&
            foodList.map(food => (
              <Food
                key={food.id}
                food={food}
                handleDelete={handleDeleteFood}
                handleEditFood={handleEditFood}
              />
            ))}
        </FoodsContainer>
      </>
    );
  }
;

export default Dashboard;
