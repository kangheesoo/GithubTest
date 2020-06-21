import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class Threadtest extends Thread{
   
   static int value = 10;
   int threadvalue=0;
  
   
   public static void main(String[] args) throws InterruptedException {

       ExecutorService executor = Executors.newFixedThreadPool(3);

       executor.submit(() -> {
           value=13;
           System.out.println("Thread1 " + value);
       });
       executor.submit(() -> {
           value=16;
           System.out.println("Thread2 " + value);
       });
       executor.submit(() -> {
    	   value=17;
           System.out.println("Thread3 " + value);
       });
       
       executor.shutdown();
       
       
	   
   }
   
}
