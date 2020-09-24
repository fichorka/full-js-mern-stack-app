# App Specification

## Users

-   Users can register
-   Users can login / logout
-   Users can change their information
-   Users with admin role can manage other users, items and orders (add, edit, remove and delete)
-   Logged users can access their profile
-   In the profile they can edit their information and see a list of their orders

## Store

-   Users can browse store items by category and sort by price
-   Users can access and modify their cart
-   Users can make and modify orders

## Cart and order

-   All users, logged in, or not, can have a statefull experience: browse the store, add/remove items in the cart and make an order
-   Users can refresh the cart and the modified items are highlighted.
-   If item in the cart is removed from the database, it is displayed as non-existing and the order can't be made until the item is removed from the cart.
-   When user attempts to make an order, the cart is refreshed, and the order is accepted only if the items inside the cart weren't modified in the meantime, otherwise modified itemes are highlighted and the details are updated allowing the user to re-order.
-   Once the order is accepted, user is notified and the cart is cleared
-   The order is in the 'processing' state for 2 minutes, then in the 'delivery' state for 5 minutes and then gets the 'delivered' state (9/10 chance), or 'returned' state (1/10 chance)

-   All users can make orders.
-   Logged users can see all of their orders with the details
-   Logged users can cancel their order only while in the 'processing' state
-   User with admin role can see all the orders of all the users
