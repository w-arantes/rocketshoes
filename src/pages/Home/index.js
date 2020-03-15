import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

import shoe1 from '../../assets/images/shoes/shoe1.jpg';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={shoe1} alt="Tênis" />
        <strong>Tênis New Balance</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={shoe1} alt="Tênis" />
        <strong>Tênis New Balance</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={shoe1} alt="Tênis" />
        <strong>Tênis New Balance</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={shoe1} alt="Tênis" />
        <strong>Tênis New Balance</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={shoe1} alt="Tênis" />
        <strong>Tênis New Balance</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={shoe1} alt="Tênis" />
        <strong>Tênis New Balance</strong>
        <span>R$179,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
