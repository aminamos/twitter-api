Rails.application.routes.draw do
  resources :likes
  resources :edits
  resources :tweets
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
