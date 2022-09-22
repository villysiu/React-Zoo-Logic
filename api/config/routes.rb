Rails.application.routes.draw do
  
  get 'private/get_current_user'

  devise_for :users,
    path: '', 
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }

    resources :users
    #  :only => [:index, :update]
  resources :games
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
