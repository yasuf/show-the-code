// File: src/Controller/DefaultController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(): Response
    {
        return new Response('Hello, Symfony!');
    }

    /**
     * @Route("/greet/{name}", name="greet")
     */
    public function greet(string $name): Response
    {
        return new Response("Hello, $name!");
    }
}
