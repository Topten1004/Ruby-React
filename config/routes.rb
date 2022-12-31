Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :create, :show, :update, :destroy]
    end
  end
  get 'posts/:id/edit', to: 'hello_world#index';
  get 'posts/:id', to: 'hello_world#index';
  get 'posts/new', to: 'hello_world#index';
  root 'hello_world#index'
end
