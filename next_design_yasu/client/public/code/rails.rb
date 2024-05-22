# File: config/routes.rb

Rails.application.routes.draw do
    get '/', to: 'application#hello'
    get '/greet/:name', to: 'application#greet'
  end
  
  # File: app/controllers/application_controller.rb
  
  class ApplicationController < ActionController::Base
    def hello
      render plain: 'Hello, Rails!'
    end
      
    def greet
      render plain: "Hello, #{params[:name]}!"
    end
  end
  