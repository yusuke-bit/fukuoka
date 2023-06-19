Rails.application.routes.draw do
  resources :perfumes
  devise_for :users, controllers: {
    omniauth_callbacks: "users/omniauth_callbacks"
  }
  resources :users, only: [:show, :edit, :update, :destroy]
  get 'spot' => 'posts#spot'
  get 'food' => 'posts#food'
  resources :posts
  root 'posts#index'
  resources :posts do
  resources :likes, only: [:create, :destroy]
  resources :comments, only: [:create]
  end
end

