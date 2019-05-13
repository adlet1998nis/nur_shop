from django.urls import path

from api.views import CategoryList, ProductList, CategoryDetail, BasketList, ProductD

from api import views

urlpatterns = [
    path('categories/', CategoryList.as_view()),
    path('products/', ProductList.as_view()),
    path('categories/<int:pk>/', CategoryDetail.as_view()),
    path('basket/', BasketList.as_view()),
    path('login/', views.login),
    path('logout/', views.logout),
    path('history/', views.get_order_history),
    path('order/', views.make_order),
    path('products/<int:pk>/', ProductD.as_view())
]