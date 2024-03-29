import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Card, Stack, Heading, CardFooter, Divider, Box, Button, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
const Cart = () => {

    const [cart, fullPrice, increaseOne, eraseOne, clearCart] = useContext(CartContext);

    return (
        <Container maxW="xl" centerContent>
            <br />
            <br />
            <Heading size="xl" color="green" mb={1}>
                SHOPPING CART
            </Heading>
            <br />
            <br />
            {cart.map((item) => (
                <Box key={item.id} w="100%">
                    <Divider mb={4} />
                    <Card>
                        <Box p={4} backgroundColor="#f1ecfd">
                            <Image src={item.imagen} alt={item.nombre} width="100%" height="auto" />
                            <Stack spacing={4}>
                                <Heading color="#778751" size="md">
                                    Nombre del producto: {item.nombre}
                                </Heading>
                                <Heading color="#778751" size="md">
                                    Precio unitario: ${item.precio}.-
                                </Heading>
                                <Heading color="#778751" size="md">
                                    Cantidad: {item.stock}.-
                                </Heading>
                            </Stack>
                            <CardFooter>
                                <Button colorScheme="red" onClick={() => eraseOne(item.id)}>
                                    Eliminar
                                </Button>
                                <Text fontSize="lg" fontWeight="bold" color="teal.500" ml={4}>
                                    ¿Quieres modificar tu compra?
                                </Text>
                                <Button colorScheme="green" onClick={() => increaseOne(item.id)} ml={4}>
                                    Agregar
                                </Button>
                            </CardFooter>
                        </Box>
                    </Card>
                    <Divider mt={4} />
                </Box>
            ))}
            <Heading color="#778751" size="xl" mt={4}>
                Precio final: ${fullPrice()}.-
            </Heading>
            <Button mt={4} colorScheme="teal" onClick={clearCart}>
                Vaciar Carrito
            </Button>
            <Link to="/orden">
                <Button mt={4} colorScheme="green">
                    Confirmar compra
                </Button>
            </Link>
        </Container>
    );
};

export default Cart;

// if carrito.length > 0 {
//     //muestro el formulario
// }
// else
//muestro un boton que me rediriga al catalogo principal con todos los productos
