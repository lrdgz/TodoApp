<?php

namespace App\Controller;

use App\Entity\Todo;
use App\Repository\TodoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/todo", name="api_todo")
 */
class TodoController extends AbstractController
{

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * @var TodoRepository
     */
    private $todoRepository;

    public function __construct(EntityManagerInterface $entityManager, TodoRepository $todoRepository)
    {

        $this->entityManager = $entityManager;
        $this->todoRepository = $todoRepository;
    }

    /**
     * @Route("/read", name="api_todo_read", methods={"GET"})
     */
    public function index()
    {
        $todos = $this->todoRepository->findAll();
        $arrayOfTodos = [];
        foreach ($todos as $todo) {
            $arrayOfTodos[] = $todo->toArray();
        }

        return $this->json($arrayOfTodos);
    }


    /**
     * @Route("/create", name="api_todo_create", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {
        $content = json_decode($request->getContent());
        $todo = new Todo();

        $todo->setName($content->name);

        try{
            $this->entityManager->persist($todo);
            $this->entityManager->flush();

        } catch (\Exception $e){
            return $this->json([
                'message' => [
                    'text' => ['Could not submit To-Do to the database.'],
                    'level' => 'error',
                ]
            ]);
        }

        return $this->json([
            'todo' => $todo->toArray(),
            'message' => [
                'text' => ['To-Do has been created!', "Task: {$content->name}"],
                'level' => 'success',
            ]
        ]);
    }

    /**
     * @Route("/update/{id}", name="api_todo_update", methods={"PUT"})
     * @param Request $request
     * @param Todo $todo
     * @return JsonResponse
     */
    public function update(Request $request, Todo $todo)
    {
        $content = json_decode($request->getContent());
        $todo->setName($content->name);

        try{
            $this->entityManager->flush();
        } catch (\Exception $e){

        }

        return $this->json([
            'message' => 'Todo has been updated'
        ]);
    }

    /**
     * @Route("/delete/{id}", name="api_todo_delete", methods={"DELETE"})
     * @param Todo $todo
     * @return JsonResponse
     */
    public function delete(Todo $todo)
    {
        try{
            $this->entityManager->remove($todo);
            $this->entityManager->flush();
        } catch (\Exception $e){

        }

        return $this->json([
            'message' => 'Todo has been deleted'
        ]);
    }
}
