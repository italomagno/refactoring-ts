import { Component, useState, useEffect } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';
import api from '../../services/api';


type FoodPropieties = {
  id: number,
  name: string,
  description: string,
  price: number,
  available: boolean,
  image: string

}

interface FoodProps{
  food: FoodPropieties;
  handleEditFood: (food: FoodPropieties) => void;
  handleDelete: (id: number) => void;


}


function Food ({ food ,handleEditFood , handleDelete }: FoodProps){
 
  const [isAvailable, setIsAvailable] = useState(food.available)

  // constructor(props) {
  //   super(props);

  //   const { available } = this.props.food;
  //   this.state = {
  //     isAvailable: available
  //   };
  // }

  const toggleAvailable = async () => {
    await api.put(`/foods/${food.id}`, {
    ...food,
    available: !isAvailable,
  });
    setIsAvailable(!isAvailable)
  }
  // const toggleAvailable = async () => {
  //   const { food } = this.props;
  //   const { isAvailable } = this.state;
  //   await api.put(`/foods/${food.id}`, {
  //     ...food,
  //     available: !isAvailable,
  //   });
  //   this.setState({ isAvailable: !isAvailable });
  // }

  const setEditingFood = () => {
    handleEditFood(food)
  }
  // setEditingFood = () => {
  //   const { food, handleEditFood } = this.props;

  //   handleEditFood(food);
  // }

   


    return (
      //vailable ={ isAvailable}
      <Container  >
        <header>
          <img src={food.image} alt={food.name} />
        </header>
        <section className="body">
          <h2>{food.name}</h2>
          <p>{food.description}</p>
          <p className="price">
            R$ <b>{food.price}</b>
          </p>
        </section>
        <section className="footer">
          <div className="icon-container">
            <button
              type="button"
              className="icon"
              onClick={setEditingFood}
              data-testid={`edit-food-${food.id}`}
            >
              <FiEdit3 size={20} />
            </button>

            <button
              type="button"
              className="icon"
              onClick={() => handleDelete(food.id)}
              data-testid={`remove-food-${food.id}`}
            >
              <FiTrash size={20} />
            </button>
          </div>

          <div className="availability-container">
            <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

            <label htmlFor={`available-switch-${food.id}`} className="switch">
              <input
                id={`available-switch-${food.id}`}
                type="checkbox"
                checked={isAvailable}
                onChange={toggleAvailable}
                data-testid={`change-status-food-${food.id}`}
              />
              <span className="slider" />
            </label>
          </div>
        </section>
      </Container>
    );
  
};

export default Food;
