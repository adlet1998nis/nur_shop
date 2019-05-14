from django.contrib.auth.models import User
from rest_framework import serializers

from api.models import Product, Category, Customer, Basket, BasketListModel


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('__all__')


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = ('__all__')

class CategoryDetailSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many = True)
    class Meta:
        model = Category
        fields = ('id', 'title', 'products')

class AddProductSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()


class BasketSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = Basket
        fields = ('__all__')


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'username', 'isAdmin',)


class ProductAdminSerializer(serializers.ModelSerializer):
    added_by = CustomerSerializer(read_only = True)
    category = CategorySerializer(read_only = True)
    class Meta:
        model = Product
        fields = '__all__'

class CustomerAuthSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')
        customers = Customer.objects.all()
        for customer in customers:
            if (username==customer.username and password==customer.password):
                attrs['customer'] = customer
                return attrs
        msg = _('Unable to log in with provided credentials.')
        raise serializers.ValidationError(msg, code='authorization')


class BasketListSerializer(serializers.ModelSerializer):
    user = CustomerSerializer()
    class Meta:
        model = BasketListModel
        fields = ('__all__')

class OrderSerializer(serializers.Serializer):
    products = ProductSerializer(many=True)
    basket_group = BasketListSerializer()
    total_price = serializers.IntegerField()
