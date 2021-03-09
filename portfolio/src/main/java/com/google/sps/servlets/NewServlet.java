package com.google.sps.servlets;
import java.util.*;
import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /new URL. Try running a server and navigating to /new */
@WebServlet("/new")
public class NewServlet extends HttpServlet {
  HashMap<Integer, String> messages = new HashMap<Integer, String>();

  
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    String json = convertToJsonUsingGson(messages);
    response.setContentType("application/json;");
    response.getWriter().println(json);
    response.getWriter().println("<h1>Hello World!</h1>");
    response.getWriter().println("<p>My Servlet is running!</p>");
    messages.put(1, "I like to drink Coca-cola");
    messages.put(2, "I come from Ghana");
    messages.put(3, "I like to cook");

    

}

private String convertToJsonUsingGson(HashMap<Integer, String> messages) {
    Gson gson = new Gson();
    String json = gson.toJson(messages);
    return json;
  }
}